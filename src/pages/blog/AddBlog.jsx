import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";

const AddBlog = ({data}) => {  

  return (
    <Layout>
      <Form type="Create" />
    </Layout>
  );
};

export default AddBlog;
