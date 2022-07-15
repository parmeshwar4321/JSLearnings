const Formdata=require('form-data')

// const fd=new Formdata();


// fd.append('name','bablu')
// fd.append('id',1234)
// fd.append('created_dt',Date.now());

var form = new Formdata();
form.append( 'my_string', 'my value' );
form.append( 'my_integer', 1 );
form.append( 'my_boolean', true );
// form.append( 'my_buffer', new Buffer(10) );
form.append( 'my_array_as_json', JSON.stringify( ['bird','cute'] ) )

console.log(form)