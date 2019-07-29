// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler =  (event, context, callback) => {
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


  let toEmail = '';

  if (data.formto == 'dev') {
    toEmail = 'info@spinme.nl'
  }

  if (data.formto == 'info') {
    toEmail = 'info@callvoip.nl'
  }

  if (data.formto == 'offerte') {
    toEmail = 'offerte@callvoip.nl'
  }

  if (data.formto == 'aanvragen') {
    toEmail = 'aanvragen@callvoip.nl'
  }




  const msg = {
    to: data.email,
    from:  toEmail || 'aanvragen@callvoip.nl',
    bcc: toEmail || 'aanvragen@callvoip.nl',
    subject: "Inzending formulier Callvoip",

    templateId: data.formlayout || defaultTemplate,
    dynamic_template_data: {
      last_name: data.achternaam,
      fields: fields
    }
  };

  // const msgInternal = {
  //   to: toEmail,
  //   from: data.email || 'aanvragen@callvoip.nl',
  //   subject: 'Inzending formulier callvoip.nl',

  //   // template id from sendgrid
  //   templateId: internalTemplate,
  //   dynamic_template_data: {
  //     last_name: data.achternaam,
  //     form_name: form_name,
  //     fields: fields
  //   }
  // };



  return sgMail.send(msg);




  // console.log('sending mail with', msgInternal)

  // try {
  //   return sgMail.send(msgInternal);
  // } catch(error) {
  //   console.error('error', error)
  // }


};