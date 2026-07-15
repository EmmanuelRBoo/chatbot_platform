async function transformToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      resolve(result);
    };

    reader.onerror = reject;
  });
}

export default {
  transformToBase64,
};
