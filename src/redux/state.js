const initialState = {
  user: {
    name: null,
    lastName: null,
    email: null,
    country: null,
    city: null,
    photoUrl: null,
    phone: null,
    reserves: {
      active: [],
      finished: [],
    },
    admin: false,
    uid: ''
  },
  view: "landing",
  reserve: {
    hut: {},
    entry: '',
    leave: '',
    room: '',
    price: 0
  },
  huts:
  {
    name: "",
    description: "",
    photo: [],
    rooms: [],
    city: "",
  },
};

export { initialState };
