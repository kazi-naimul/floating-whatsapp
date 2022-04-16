# Floating Whatsapp
This is a simple Floating Whatsapp chat head made with javasctipt and jquery.

# Features
  1. Multiple/Single Whatsapp Number in chat box
  2. Color control
  3. Add User image
  4. Custom design supported

# Integration 
 Use following script and css in the header:
 ```sh
    <script type="text/javascript" src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="whatsapp-chat.js"></script>
    <link rel="stylesheet" href="whatsapp-chat.css">
 ```
 Here is the sample integration code:


 <b>Single User:</b>
 ```sh
    <script type="text/javascript">
      whatsappchat.singleUser(
          {
              selector: '#myButton' 
              name:'Joey Tribbiani',
              phone: '8801343434343',
              designation: 'Customer Support',
              headerMessage: 'Feel free to ask any questions in <strong>WhatsApp</strong>',
              iconColor: '#25D366'
          }
      );
  </script>
```
 
<b> Multiple User:</b>
```sh
    <script type="text/javascript">
      whatsappchat.multipleUser(
          {
              selector: '#myButton',
              users: [
                  {
                      name:'Joey Tribbiani',
                      phone: '8801343434343',
                      designation: 'Customer Support',
                      image : 'https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg'
                  },
                  {
                      name:'Chandler Bing',
                      phone: '8801343434343',
                      designation: 'Customer Support',
                      image: 'https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png'

                  },
                  {
                      name:'Kazi Naimul Hoque',
                      phone: '8801343434343',
                      active: false
                  },
              ],
              headerMessage: 'Feel free to ask any questions in <strong>WhatsApp</strong>',
              chatBoxMessage: 'Team replies in a minute',
              color: '#25D366'
          }
      );
  </script>
```
