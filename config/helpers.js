var Handlebars = require('Handlebars');
var dateFormat = require('dateformat');


module.exports = {
  truncate: function (str, len) {

    if(!str) return "";
          if (str.length > len) {
              var new_str = str.substr (0, len+1);

              while (new_str.length) {
                  var ch = new_str.substr ( -1 );
                  new_str = new_str.substr ( 0, -1 );

                  if (ch == ' ') {
                      break;
                  }
              }

              if ( new_str == '' ) {
                  new_str = str.substr ( 0, len );
              }

              cleanText = new_str.replace(/<\/?[^>]+(>|$)/g, "");

              return new Handlebars.SafeString ( cleanText );
          }
          return str;
      }
};

