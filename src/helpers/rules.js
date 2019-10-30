const rules = {
    visitor: {
        static: [
            "post:list",
            "home-page:visit"
        ]
    },
    general: {
        static: [
            "post:list",
        ],
        dynamic: {
            "post:edit": ({ userId, postOwnerId }) => {
                if (!userId || !postOwnerId) return false;
                return userId === postOwnerId;
            }
        }
    }
};

export default rules;
