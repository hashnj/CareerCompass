import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../lib/axiosInstance';
import { toast } from 'react-toastify';

const MediaUpload = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);

    if (data.video[0]) {
      formData.append('video', data.video[0]); 
    }

    if (data.displayImage[0]) {
      formData.append('displayImage', data.displayImage[0]); 
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Media uploaded successfully!');
      console.log('Response:', response.data);
      reset(); // Reset form fields
    } catch (error) {
      console.error('Error uploading media:', error);
      toast.error('Failed to upload media.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Upload Media</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register('title', { required: true })}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter video title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description', { required: true })}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter video description"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            {...register('video', { required: true })}
            type="file"
            accept="video/*"
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Display Image (Optional)</label>
          <input
            {...register('displayImage')}
            type="file"
            accept="image/*"
            className="mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 text-white bg-primary rounded-md ${
            isLoading ? 'opacity-50' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default MediaUpload;
