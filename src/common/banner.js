import React from 'react';

import {
Form,
FormControl,
Button } from 'react-bootstrap';

function Banner() {
  return (
      <div className="jumbotron alignCenter">
        <h1 className="display-4">Facebook Video Downloader</h1>
        <p className="lead">Download Facebook Videos</p>
        <hr className="my-4" />
        <Form>
          <FormControl type="text" placeholder="Facebook Video URL" className="mr-sm-2" />
          <Button type="submit" style={{marginTop: '10px'}} >Download</Button>
        </Form>
      </div>
  );
}

export default Banner;
