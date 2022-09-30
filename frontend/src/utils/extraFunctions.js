export const notify = (toast, title, status, position="top", description) => {
  return toast({
    title,
    status,
    description,
    duration: 3000,
    position: position,
    isClosable: true,
  });
};
