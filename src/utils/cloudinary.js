import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          

cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // console.log("File Uploaded on cloudinary successfully", response.url);
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteCloudinary = async (oldImage) => {
    if (oldImage) {
        try {
            await cloudinary.uploader.destroy(oldImage);
        } catch (error) {
            console.error("Error while deleting old avatar on Cloudinary:", error);
        }
    }
};

export {uploadOnCloudinary, deleteCloudinary}