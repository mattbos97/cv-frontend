export interface Skill{
    name: string,
    level: 'beginner' | 'intermediate' | 'expert' | 'pro'
}

export const levelToPercentage: Record<string, number> = {
    'beginner': 0,
    'intermediate': 33.33,
    'expert': 66.66,
    'pro': 100
}