const fs = require('fs');
const jpg = Buffer.from(' /9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAALCAABAAEBAREA/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFBv/EABcBAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANOlAAAAAAAAAAAAAAAAAAA//Z'.trim(), 'base64');
const files = [
  'src/images/clinic-interior.jpg',
  'src/images/doctor-portrait.jpg',
  'src/images/care-team.jpg',
  'src/images/hero-background.jpg',
];
for (const file of files) {
  fs.writeFileSync(file, jpg);
  console.log('created', file);
}
