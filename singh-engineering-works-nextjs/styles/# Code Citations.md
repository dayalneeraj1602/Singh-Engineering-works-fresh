# Code Citations

## License: unknown
https://github.com/dayalneeraj1602/singh-Singh-works/blob/c9e373b0833bdce34eae2dea728d1462d4dfa947/src/pages/Contact.js

```
email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string(),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://formspree.io/f/${mailkey}`,
          values
```

