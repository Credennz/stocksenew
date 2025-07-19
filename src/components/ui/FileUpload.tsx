import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  selectedFile,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    onFileSelect(file);
  };

  const handleRemoveFile = () => {
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary-dark">
        Upload File (Optional)
      </label>
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept=".jpg,.png,.pdf,.docx"
          className="hidden"
        />
        {selectedFile ? (
          <div className="flex items-center justify-between p-2 border border-primary/20 rounded-lg">
            <span className="text-sm text-primary-dark truncate">
              {selectedFile.name}
            </span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full p-4 border-2 border-dashed border-primary/20 rounded-lg hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-6 h-6 text-primary/50" />
              <span className="text-sm text-primary-dark">
                Click to upload (max 5MB)
              </span>
              <span className="text-xs text-primary-dark/60">
                Supported formats: JPG, PNG, PDF, DOCX
              </span>
            </div>
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};