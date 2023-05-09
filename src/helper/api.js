import axios from "axios";
function appendObjectToFormData(formData, data, parentKey = "") {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          const itemKey = `${formKey}[${index}]`;
          if (
            typeof item === "object" &&
            item !== null &&
            !(item instanceof File || item instanceof Blob)
          ) {
            appendObjectToFormData(formData, item, itemKey);
          } else if (item instanceof File || item instanceof Blob) {
            formData.append(itemKey, item, item.name);
          } else {
            formData.append(itemKey, String(item));
          }
        });
      } else if (
        typeof value === "object" &&
        value !== null &&
        !(value instanceof File || value instanceof Blob)
      ) {
        appendObjectToFormData(formData, value, formKey);
      } else if (value instanceof File || value instanceof Blob) {
        formData.append(formKey, value, value.name);
      } else {
        formData.append(formKey, String(value));
      }
    }
  }
}
function Api(props) {
  const { data, header, url, method } = props;
  return new Promise((res, rej) => {
    const formData = new FormData();
    data && appendObjectToFormData(formData, data);
    var headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    header &&
      header.map((e) => {
        headers = {
          ...headers,
          [e.key]: e.value,
        };
      });
    for (const key of formData.keys()) {
    }
    if (method == "post") {
      axios.post(url, formData, { headers }).then((e) => {
        return res(e);
      });
    } else {
      axios.get(url, { headers }).then((e) => {
        return res(e);
      });
    }
  });
}

export default Api;
