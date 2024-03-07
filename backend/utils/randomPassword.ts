export const generateRandomPassword = (teamName: string): string => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  const password = `${teamName}${randomNumber}`;

  return password;
};
