// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = (event, context, callback) => {
    console.log('called', event)
    console.log('----------------DATA--------------')
    console.log(JSON.parse(event.body).payload.data);
    console.log('----------------Human Fields--------------')
    console.log(JSON.parse(event.body).payload.human_fields);
    console.log('----------------Ordered Human Fields--------------')
    console.log(JSON.parse(event.body).payload.ordered_human_fields);
    console.log('----------------Form Name--------------')
    console.log(JSON.parse(event.body).payload.form_name);

    const data = JSON.parse(event.body).payload.data;
    const fields = JSON.parse(event.body).ordered_human_fields;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);


    const msg = {
      to: "info@frankspin.nl",
      from: 'info@callvoiptelefonie.nl',
      subject: 'Inzending contactformulier ontvangen',

      // template id from sendgrid
      templateId: 'd-5f1602c68c8a42919ddf340e285386e3',
      dynamic_template_data: {
        last_name: data.achternaam,
        fields: fields
      }
    };

    console.log('sending mail with', msg)

    return sgMail.send(msg);




};
