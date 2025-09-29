'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Palette,
  Monitor,
  Moon,
  Sun,
  Box,
  Sparkles,
  Minus,
} from 'lucide-react';
import { useTheme } from '../context/theme.context.tsx';

export function ThemeSwitcher({
  variant = 'select',
}: {
  variant?: 'select' | 'buttons' | 'compact';
}) {
  const { theme, setTheme, themeNames } = useTheme();

  const themeIcons = {
    default: <Monitor className="h-4 w-4" />,
    dark: <Moon className="h-4 w-4" />,
    'theme-vercel': <Sun className="h-4 w-4" />,
    'theme-boring': <Box className="h-4 w-4" />,
    'theme-colorful': <Sparkles className="h-4 w-4" />,
    'theme-minimal': <Minus className="h-4 w-4" />,
  };

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          const themes = Object.keys(themeNames) as Array<
            keyof typeof themeNames
          >;
          const currentIndex = themes.indexOf(theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex]);
        }}
        className="gap-2"
      >
        <Palette className="h-4 w-4" />
        {themeNames[theme]}
      </Button>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.entries(themeNames).map(([key, name]) => (
          <Button
            key={key}
            variant={theme === key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme(key as any)}
            className="gap-2"
          >
            {themeIcons[key as keyof typeof themeIcons]}
            {name}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <Select value={theme} onValueChange={(value) => setTheme(value as any)}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(themeNames).map(([key, name]) => (
          <SelectItem key={key} value={key}>
            <div className="flex items-center gap-2">
              {themeIcons[key as keyof typeof themeIcons]}
              {name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
