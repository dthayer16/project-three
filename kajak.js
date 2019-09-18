import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'moment/locale/it.js';
import { DatePicker, DatePickerInput } from 'rc-datepicker';

const date = '2019-09-30' // or Date or Moment.js


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>



<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Depart:</Form.Label>
    <Form.Control type="text" placeholder="Enter Departing Airport" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Arrive:</Form.Label>
    <Form.Control type="text" placeholder="Enter Arriving Airport" />

    onChange = (jsDate, dateString) => {
  // ...
}

React.renderComponent(
  <div>
    // this renders the full component (input and datepicker)
    <DatePickerInput
      onChange={onChange}
      value={date}
      className='my-custom-datepicker-component'
      {...anyReactInputProps}
    />

    // this renders only a fixed datepicker
    <DatePicker onChange={onChange} value={date} />
  </div>,
  document.body
);

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Adults</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>

    </Form.Control>
  </Form.Group>
</Form>