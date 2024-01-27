import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';

const EmailForm = ({ studentEmail, onHide }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [resultLink, setResultLink] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [errorSending, setErrorSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (emailSent) {
      alert('Email sent successfully!');
      onHide();
    }
  }, [emailSent, onHide]);

  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:4000/api/send-email', {
        to: studentEmail,
        subject,
        message,
        resultLink,
      });
      setEmailSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorSending(true);
    }
  };

  const handleHide = () => {
    setIsModalOpen(false);
    if (emailSent) {
      onHide();
    }
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={handleHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send Result Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formResultLink">
              <Form.Label>Result Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter result link"
                value={resultLink}
                onChange={(e) => setResultLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmailForm;
