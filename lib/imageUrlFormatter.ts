export default function imageUrlFormatter(imagePath: string) {
  return `https://firebasestorage.googleapis.com/v0/b/fire-homes-course-ef6b6.firebasestorage.app/o/${encodeURIComponent(
    imagePath
  )}?alt=media`;
}
