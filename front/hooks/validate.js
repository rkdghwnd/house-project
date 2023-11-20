export const isCorrectEmailName = (emailName) => {
  return /^[a-zA-Z0-9+-_.]+/.test(emailName);
};

export const isCorrectDomain = (domain) => {
  return /[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(domain);
};

export const isCorrectPhoneNumber = (phoneNumber) => {
  const phoneRule = /^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/;

  return phoneRule.test(phoneNumber) && phoneNumber.length >= 10;
};
