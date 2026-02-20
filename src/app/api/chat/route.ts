import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;
    
    const zai = await ZAI.create();
    
    const completion = await zai.chat.completions.create({
      messages: [
        { 
          role: 'system', 
          content: 'You are an expert AI trading assistant for InfinityAlgo Academy. Help traders understand signals and market analysis. Be concise and helpful.' 
        },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, I could not process your request.';
    
    return NextResponse.json({
      success: true,
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
