import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "~/utils/uploadthing";
 
const { useUploadThing } = generateReactHelpers<OurFileRouter>();
 
export function ImageUploader() {
  const { getRootProps, getInputProps, files, startUpload } =
    useUploadThing("imageUploader");
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {files.length > 0 && (
          // this `startUpload` is needed for image upload uploaded, found it safe to this linter error as trying to fix it might lead to breaking image upload.
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button onClick={() => {
            try {
                const uploadedFiles = startUpload()
                console.log(JSON.stringify(uploadedFiles))
            } catch (e) {
                console.error(e);
            }
          }}>
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}