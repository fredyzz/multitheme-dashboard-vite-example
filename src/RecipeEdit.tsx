'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Upload, ImageIcon } from 'lucide-react';
import { ComboBox } from './components/ui/combo-box';

import { COMBO_BOX_OPTIONS_MOCK } from './mocks/combo-box-options.mock';

export function RecipeEditScreen() {
  const [title, setTitle] = useState('Wrap de curry');
  const [youtubeVideo, setYoutubeVideo] = useState('9ktvGeMztfA');
  const [course, setCourse] = useState('primeros');
  const [foodType, setFoodType] = useState('pan-masas');
  const [difficulty, setDifficulty] = useState('medium');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex min-h-svh flex-col p-4 gap-8">
      <h1>Edit recipe</h1>

      <div className="space-y-6 max-w-160">
        {/* Title Field */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm text-muted-foreground">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          />
        </div>

        {/* Image Section */}
        <div className="space-y-4">
          <Label className="text-sm text-muted-foreground">Image</Label>

          <div className="w-60 h-40 relative rounded-lg overflow-hidden border border-border">
            {selectedImage ? (
              <img
                src={selectedImage || '/placeholder.svg'}
                alt="Recipe preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-sm">No image selected</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">
              File preview
            </Label>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                isDragOver
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-blue-400 bg-blue-50/30'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-5 w-5 text-blue-600" />
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600 font-medium">
                    UPLOAD IMAGE
                  </span>
                  <span className="text-muted-foreground">
                    OR DRAG FILE HERE
                  </span>
                </div>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />

            <p className="text-xs text-muted-foreground">
              Dimensions: 2560*1440px (1280*720@2x), Maximum file size: 3MB
            </p>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="space-y-2">
          <Label htmlFor="youtube" className="text-sm text-muted-foreground">
            YouTube video
          </Label>
          <Input
            id="youtube"
            value={youtubeVideo}
            onChange={(e) => setYoutubeVideo(e.target.value)}
            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          />
          <p className="text-xs text-muted-foreground">e.g. BWzcyX0FWgg</p>
        </div>

        {/* Courses Dropdown */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">
            Courses <span className="text-red-500">*</span>
          </Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primeros">Primeros</SelectItem>
              <SelectItem value="segundos">Segundos</SelectItem>
              <SelectItem value="postres">Postres</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Food Types Dropdown */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">
            Food types <span className="text-red-500">*</span>
          </Label>
          <Select value={foodType} onValueChange={setFoodType}>
            <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pan-masas">Pan y Masas</SelectItem>
              <SelectItem value="carnes">Carnes</SelectItem>
              <SelectItem value="pescados">Pescados</SelectItem>
              <SelectItem value="verduras">Verduras</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty Radio Group */}
        <div className="space-y-4 mv-6">
          <Label>
            Difficulty <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={difficulty}
            onValueChange={setDifficulty}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="low" id="low" />
              <Label
                htmlFor="low"
                className="text-sm text-foreground cursor-pointer"
              >
                Low
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="medium" id="medium" />
              <Label
                htmlFor="medium"
                className="text-sm text-foreground cursor-pointer"
              >
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="high" id="high" />
              <Label
                htmlFor="high"
                className="text-sm text-foreground cursor-pointer"
              >
                High
              </Label>
            </div>
          </RadioGroup>
        </div>

        <ComboBox options={COMBO_BOX_OPTIONS_MOCK} />
      </div>
    </div>
  );
}
