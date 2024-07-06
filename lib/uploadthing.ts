import {
  generateUploadButton,
  generateUploader,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

const UploadDropzone = generateUploadDropzone<OurFileRouter>();
const Uploader = generateUploader<OurFileRouter>();
const UploadButton = generateUploadButton<OurFileRouter>();

export { UploadDropzone, UploadButton, Uploader };
