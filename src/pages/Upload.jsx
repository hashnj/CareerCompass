import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../lib/axiosInstance';
import { toast } from 'react-toastify';

const MediaUpload = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);

    if (data.video[0]) {
      // Validate video size (e.g., max 50MB)
      if (data.video[0].size > 100 * 1024 * 1024) {
        toast.error('Video size must be less than 50MB.');
        return;
      }
      formData.append('video', data.video[0]);
    }

    if (data.displayImage?.[0]) {
      formData.append('displayImage', data.displayImage[0]);
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          toast.info(`Uploading: ${percentage}%`);
        },
      });
      toast.success('Media uploaded successfully!');
      console.log('Response:', response.data);
      reset();
    } catch (error) {
      console.error('Error uploading media:', error);
      if (error.response) {
        toast.error(`Upload failed: ${error.response.data.message}`);
      } else {
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-backgrounds w-full h-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center max-w-md mx-auto p-4 bg-background rounded shadow">
        <h1 className="text-2xl font-semibold text-primary mb-4">Upload Media</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary/70">Title</label>
            <input
              {...register('title', { required: 'Title is required' })}
              type="text"
              className="mt-1 block w-full p-2 rounded-md border-text/20 text-text bg-backgrounds shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter video title"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary/70">Description</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows="3"
              className="mt-1 block w-full p-2 rounded-md border-text/20 text-text bg-backgrounds shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter video description"
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary/70">Video</label>
            <input
              {...register('video', { required: 'Video is required' })}
              type="file"
              accept="video/*"
              className="mt-1 block text-text/50 w-full"
            />
            {errors.video && <p className="text-red-500 text-xs mt-1">{errors.video.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary/70">Display Image / Thumbnail (Optional)</label>
            <input
              {...register('displayImage')}
              type="file"
              accept="image/*"
              className="mt-1 block text-text/50 w-full"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white bg-primary rounded-md ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MediaUpload;
