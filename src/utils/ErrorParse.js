const parseError = (error) => {
  let message = "";

  if (error.response) {
    if (error.response.status === 401) {
      // Logout user
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }

    message = error.response.data.message;
  } else if (error.request) {
    message = "Network Error!";
  } else if (error) {
  } else {
    message = error.message;
  }

  throw new Error(message ?? "Something went wrong");
};

export default parseError;
