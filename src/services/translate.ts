import { google } from '@ai-sdk/google';
import { object, picklist, safeParse, string } from 'valibot';
import { generateText, streamText } from 'ai';
import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from '../assets/constants'


