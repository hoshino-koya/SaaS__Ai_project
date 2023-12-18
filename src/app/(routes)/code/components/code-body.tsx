'use client';

import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { codeGenerationSetting } from '../data';

import CodeGenerationContent from './code-content';
import CodeGenerationForm from './code-form';

const CodeGenerationBody = () => {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    codeGenerationSetting,
  ]);

  return (
    <div className='mx-auto mt-4 h-full w-full max-w-6xl overflow-hidden'>
      <div
        className={cn(
          'flex h-full flex-col gap-y-4',
          messages.length === 0 ? 'justify-start' : 'justify-end',
        )}
      >
        <CodeGenerationContent messages={messages} />
        <div className={cn('w-full', messages.length === 0 && 'mt-auto')}>
          <CodeGenerationForm messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationBody;
