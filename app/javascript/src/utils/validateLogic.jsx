export function validateReport(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "*Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "*Invalid email address";
  }
  return errors;
}
