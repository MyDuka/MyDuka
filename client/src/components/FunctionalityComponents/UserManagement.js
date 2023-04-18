import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { createUser, getUsers, editUser, deleteUser } from '../../api/userApi';

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