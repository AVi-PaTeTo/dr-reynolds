export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    content: Array<string>;
    next: string | null;
    prev: string | null;
};

export const postsList: BlogPost[] = [
    {
        slug: 'burnout_isnt_a_personal_failure',
        title: "Burnout Isn't a Personal Failure",
        date: '28/12/2025',
        content: [
            `We live in a world that treats productivity as a moral virtue. We are told that if we just manage our time better, drink more caffeine, or wake up earlier, we can "do it all." When the engine finally stalls and we find ourselves staring at a screen for hours without processing a single word, our first instinct is often guilt. We view our exhaustion as a character flaw—a sign that we aren't strong enough or disciplined enough to keep up.`,

            `But burnout is rarely about a lack of willpower. It is a biological and emotional boundary being set by a system that has been overtaxed for too long. Think of it not as a failure of your "engine," but as a safety fuse blowing to prevent the entire house from catching fire. When we reach the point of burnout, it’s usually because we’ve been operating in "survival mode" for months or even years, neglecting the fundamental human need for rest, play, and connection.`,

            `Recovery doesn't happen by trying harder; it happens by surrendering to the fact that you are a human being with finite limits. It requires us to decouple our self-worth from our output. You are not a machine designed for maximum efficiency; you are a living organism that requires seasons of dormancy to eventually bloom again. If you are feeling burnt out today, know that your body isn't failing you—it is actually trying to save you.`,
        ],
        next: 'why_anxiety_shows_up_in_the_body',
        prev: null,
    },
    {
        slug: 'why_anxiety_shows_up_in_the_body',
        title: 'Why Anxiety Shows Up in the Body',
        date: '7/1/2026',
        content: [
            `We often talk about anxiety as a "mental" health issue, as if it exists only in the realm of thoughts and logic. But anyone who has felt their heart race before a big meeting or felt their stomach drop at a sudden noise knows that anxiety is a deeply physical experience. In fact, for many people, the body feels the anxiety long before the brain even realizes why it’s upset.`,

            `This happens because our nervous system is designed for survival. When your brain perceives a threat—whether it’s a physical predator or a stressful email—it activates the sympathetic nervous system. This is the "fight or flight" response. It dumps adrenaline into your bloodstream, redirects blood flow to your muscles, and shallows your breath. Your body is literally preparing for a battle that never comes. Because there is no physical "lion" to run from, that energy stays trapped in your muscles as tension, in your chest as tightness, and in your gut as nausea.`,

            `Understanding this connection is the first step toward healing. When we realize that the "knot" in our stomach isn't a sign of a medical mystery but a message from our nervous system, we can stop trying to "think" our way out of it. Instead, we can use the body to talk back to the brain. Through deep diaphragmatic breathing, rhythmic movement, or cold water exposure, we can send a physical signal to the brain that says: “I am safe right now.”`,
        ],
        next: 'therapy_isnt_about_fixing_you',
        prev: 'burnout_isnt_a_personal_failure',
    },
    {
        slug: 'therapy_isnt_about_fixing_you',
        title: "Therapy Isn't About Fixing You",
        date: '15/1/2026',
        content: [
            `There is a common misconception that people go to therapy because they are "broken." We use words like "fixing" or "working on myself" as if we are a car in a garage or a software program with a bug in the code. This perspective creates a sense of shame, suggesting that there is a "correct" way to be human and that we are currently failing at it.`,

            `But the reality is that you aren't a project to be completed. You are a person to be understood. Most of the things we struggle with—our anxieties, our people-pleasing, our anger—started out as brilliant survival strategies. At some point in your life, those behaviors protected you. Therapy isn't about "fixing" those parts of you; it’s about acknowledging that while they served you once, they might be getting in your way now.`,

            `A therapist isn't a mechanic; they are more like a mirror and a guide. They help you peel back the layers of societal expectations and childhood conditioning to find the person who was there all along. The goal of the therapeutic process isn't to create a "new" version of you, but to help you return to your most authentic self. It’s about moving from a life of reacting to your past to a life of responding to your present. You were never broken; you were just covered in the dust of the things you've survived.`,
        ],
        next: 'you_dont_have_to_hit_rock_bottom_to_start_therapy',
        prev: 'why_anxiety_shows_up_in_the_body',
    },
    {
        slug: 'you_dont_have_to_hit_rock_bottom_to_start_therapy',
        title: "You Don't Have to Hit Rock Bottom to Start Therapy",
        date: '21/1/2026',
        content: [
            `There’s a dangerous myth that you need a "valid" enough reason to seek therapy—that unless you are in the midst of a crisis or a total collapse, you are "taking up space" that someone else needs more. We tell ourselves, "It’s not that bad," or "Other people have it worse," as we white-knuckle our way through daily stress and quiet unhappiness.`,

            `The problem with waiting for "rock bottom" is that it’s a moving target. Many people spend years sliding down a slope, waiting for a crash that never quite comes, all while their quality of life slowly erodes. You don't wait for your car to explode before you change the oil; you don't wait for a tooth to fall out before you see a dentist. Mental health deserves the same preventative care.`,

            `Seeking therapy when things are "fine" or "okay" is actually one of the most productive things you can do. When you aren't in a state of active crisis, your brain is more capable of learning new tools, processing old memories, and building resilience. Therapy is a space to explore your dreams, understand your relationships, and build a foundation that can withstand the storms when they do eventually come. You don’t need to be in the middle of a fire to learn how to use a fire extinguisher. You deserve support simply because being a human is a complex, difficult, and beautiful task.`,
        ],
        next: null,
        prev: 'therapy_isnt_about_fixing_you',
    },
];
