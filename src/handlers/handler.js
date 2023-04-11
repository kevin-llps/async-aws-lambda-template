export const hello = async (event, context) => {
  console.log("event = ", event);
  console.log("context = ", context);

  console.log("Hello World !");

  return { event };
};
