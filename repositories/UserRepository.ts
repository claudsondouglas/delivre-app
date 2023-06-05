const UserRepository = {
    async info(slug: string) {
        const res = await fetch(`${process.env.API_URL}/user/${slug}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    }
}

export default UserRepository;