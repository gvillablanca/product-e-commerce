var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
  console.log('Servidor corriendo en ', app.get('port'));
})

//paypal
const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AdfDXXm8J86twobeE7IaZYI3UlM_i0sMy-mt1K_fylhnwLt5oiEYVlKM5uAcJGXuZazDtuCwx7y4u-xT',
    'client_secret': 'EC7R_JShYW_HfFLKTRkK9JhTOKZgs_L86cv3Mx2U1NZhv46rzD1I-gObM4lbFOtuAx-hL5YoDhpLOyu3'
  });
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res)=> {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "camera",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 10
                },
                {
                    "name": "bottle",
                    "sku": "002",
                    "price": "10.00",
                    "currency":"USD",
                    "quantity": 2
                }]
            },
            "amount": {
                "currency": "USD",
                "total": items.price //monto total de los productos
            },
            "description": "camarita bien bonita"
        }]
    };
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                  res.redirect(payment.links[i].href);
                }
              }
            //console.log("Create Payment Response");
            //console.log(payment);
            
        }
    });

    
});
app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
       
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "0.00"
          }
      }]
      
    };

  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
    });
});
  
app.get('/cancel', (req, res) => res.send('Cancelled'));
  
app.listen(3000, () => console.log('Server Started'));


