import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

/**
 * Basic Editor
 */
class MyEditor extends Component {

    constructor(props) {
        super(props)
        this.state={text:''}
        this.tinyMCE=null;
    }

    onTextChange(e) { 
        this.setState({text:e.target.getContent()})
    }


    doStuffWhenFileChanges(event) {
      event.preventDefault();
      console.log(this.tinyMCE);
    }

    
    render(){
      return (
        <div>
        <TinyMCE
          content=""
          config={{
            plugins: 'link image code paste autolink media autoresize',
            toolbar: 'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | media image link'
          }}
          onChange={this.onTextChange.bind(this)}
        />
        <input type="file" onChange={this.doStuffWhenFileChanges.bind(this)} />
        </div>
      )
    }

}


export default MyEditor;