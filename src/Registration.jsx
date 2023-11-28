import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Form, Input, Button, Upload, Checkbox } from 'antd';
import { ImgCrop } from 'antd';
import './Registration.css' ;
import Link from 'antd/es/typography/Link';

const Registration = () => {
  const navigate = useNavigate();
  const [hostelName, setHostelName] = useState('');
  const [hostelImage, setHostelImage] = useState('');
  const [hostelDescription, setHostelDescription] = useState('');
  const [hostelPrice, setHostelPrice] = useState('');
  const [hostelLocation, setHostelLocation] = useState('');
  const [hostelRooms, setHostelRooms] = useState([]);
  const [distanceFromUniversity, setDistanceFromUniversity] = useState('');
  const [hostelFacilities, setHostelFacilities] = useState([]);

  const handleHostelNameChange = (e) => {
    setHostelName(e.target.value);
  };

  const handleHostelImageChange = (file) => {
    setHostelImage(file.file);
  };

  const handleHostelDescriptionChange = (e) => {
    setHostelDescription(e.target.value);
  };

  const handleHostelPriceChange = (e) => {
    setHostelPrice(e.target.value);
  };

  const handleHostelLocationChange = (e) => {
    setHostelLocation(e.target.value);
  };

  const handleHostelRoomsChange = (roomTypes) => {
    setHostelRooms(roomTypes);
  };

  const handleDistanceFromUniversityChange = (e) => {
    setDistanceFromUniversity(e.target.value);
  };

  const handleHostelFacilitiesChange = (facilities) => {
    setHostelFacilities(facilities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the SignIn
    navigate('/SignIn')

    console.log('Submitting registration form...');
    console.log({
      hostelName,
      hostelImage,
      hostelDescription,
      hostelPrice,
      hostelLocation,
      hostelRooms,
      distanceFromUniversity,
      hostelFacilities,
    });
  };

  return (
    <div>
    <h1>REGISTRATION</h1>
    <Form  className='registration-form' onSubmit={handleSubmit}>
      <Form.Item label="Hostel Name" required>
        <Input value={hostelName} onChange={handleHostelNameChange} />
      </Form.Item>

      <Form.Item label="Hostel Image" required>
        <Upload
          showUploadButton
          beforeUpload={handleHostelImageChange}
        >
          <Button>Upload Hostel Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Hostel Description" required>
        <Input.TextArea value={hostelDescription} onChange={handleHostelDescriptionChange} />
      </Form.Item>

      <Form.Item label="Hostel Price" required>
        <Input value={hostelPrice} onChange={handleHostelPriceChange} />
      </Form.Item>

      <Form.Item label="Hostel Location" required>
        <Input value={hostelLocation} onChange={handleHostelLocationChange} />
      </Form.Item>

      <Form.Item label="Room Types" required>
        <Checkbox.Group options={['Single Room', 'Double Room', 'Triple Room', 'Dorm Room']} onChange={handleHostelRoomsChange} />
      </Form.Item>

      <Form.Item label="Distance from University" required>
        <Input value={distanceFromUniversity} onChange={handleDistanceFromUniversityChange} />
      </Form.Item>

      <Form.Item label="Hostel Facilities" required>
        <Checkbox.Group options={['Free Wi-Fi', 'Water', 'Security', 'Electricity', '24-Hour Front Desk']} onChange={handleHostelFacilitiesChange} />
      </Form.Item>

      <Form.Item>
        <Button className='button'
        type="primary" htmlType="submit" onClick={() => navigate('/signin')} >
          Register
        </Button>

      </Form.Item>
      
    </Form>
    </div>
   
  );
};

export default Registration;
