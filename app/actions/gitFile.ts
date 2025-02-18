export async function getGitHubFileContent(filename: string) {
  const apiUrl = `https://api.github.com/repos/ekbal42/asifekbal-portfolio/contents/${filename}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data && data.content) {
    const decodedContent = Buffer.from(data.content, "base64").toString(
      "utf-8"
    );
    return decodedContent;
  }
  return null;
}
