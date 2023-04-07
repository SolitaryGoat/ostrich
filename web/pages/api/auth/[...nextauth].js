import NextAuth from 'next-auth';
import RedditProvider from 'next-auth/providers/reddit';

export const authOptions = {
  providers: [
    new RedditProvider({
      clientId: 'IAqPEzEj0CW06YINSEKhQQ',
      clientSecret: 'zHCA6GFGNb0_H5VoA705oKrAgPjq_w',
    }),
  ],
};

export default NextAuth(authOptions);
