// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context, callback) => {
  // console.log('called', event)
  // console.log('----------------DATA--------------')
  // console.log(JSON.parse(event.body).payload.data);
  // console.log('----------------Human Fields--------------')
  // console.log(JSON.parse(event.body).payload.human_fields);
  // console.log('----------------Ordered Human Fields--------------')
  // console.log(JSON.parse(event.body).payload.ordered_human_fields);
  // console.log('----------------Form Name--------------')
  // console.log(JSON.parse(event.body).payload.form_name);

  console.log('-------------------- FORMULIER NIEUW -----------------------')

  const data = JSON.parse(event.body).payload.data;
  const form_name = JSON.parse(event.body).payload.form_name;
  const fields = JSON.parse(event.body).payload.ordered_human_fields;

  // console.log('THIS IS THE DATA', data)

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const defaultTemplate = 'd-5f1602c68c8a42919ddf340e285386e3';
  const internalTemplate = 'd-b8915fd3b5f149ccbbcb6b469aecc71d';


  const toEmail = '';

  if (data.fromto == 'dev') {
    toEmail = 'info@frankspin.nl'
  }

  if (data.fromto == 'info') {
    toEmail = 'info@callvoip.nl'
  }

  if (data.fromto == 'offerte') {
    toEmail = 'offerte@callvoip.nl'
  }

  if (data.fromto == 'aanvragen') {
    toEmail = 'aanvragen@callvoip.nl'
  }




  const msgClient = {
    to: data.email,
    from: toEmail || 'aanvragen@callvoip.nl',
    subject: 'Inzending formulier Callvoip',

    // template id from sendgrid
    templateId: data.formlayout || defaultTemplate,
    dynamic_template_data: {
      last_name: data.achternaam,
      fields: fields
    }
  };

  const msgInternal = {
    to: toEmail,
    from: data.email || 'aanvragen@callvoip.nl',
    subject: 'Inzending formulier callvoip.nl',

    // template id from sendgrid
    templateId: internalTemplate,
    dynamic_template_data: {
      last_name: data.achternaam,
      form_name: form_name,
      fields: fields
    }
  };


  console.log('sending mail with', msgClient)

  try {
    sgMail.send(msgClient);
    console.log('Client mail send succes')
  } catch(error) {
    console.error('error', error)
  }

  console.log('sending mail with', msgInternal)

  try {
    sgMail.send(msgInternal);
    console.log('Internal mail send succes')
  } catch(error) {
    console.error('error', error)
  }

  return;
};