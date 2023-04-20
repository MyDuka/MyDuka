import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
//import { createUser, getUsers, editUser, deleteUser } from '../../api/userApi';

const API_URL = "http://localhost:3000/api/users";

// Function to fetch all users
export const getUsers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

// Function to create a new user
export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

// Function to update an existing user
export const editUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

// Function to delete an existing user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};




const UserManagementComponent = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers();
      setUsers(result);
    };
    fetchUsers();
  }, []);

  const handleCancel = () => {
    setVisible(false);
    setSelectedUser({});
    form.resetFields();
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (selectedUser.id) {
        await editUser(selectedUser.id, values);
        setUsers(users.map((user) => (user.id === selectedUser.id ? { ...user, ...values } : user)));
      } else {
        const result = await createUser(values);
        setUsers([...users, result]);
      }
      handleCancel();
    } catch (error) {
      console.log('Failed:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setVisible(true);
    form.setFieldsValue(user);
  };

  const handleDelete = async (user) => {
    await deleteUser(user.id);
    setUsers(users.filter((u) => u.id !== user.id));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add User
      </Button>
      <Modal title="Add/Edit User" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }, { type: 'email' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={users} />
    </>
  );
};

export default UserManagementComponent;