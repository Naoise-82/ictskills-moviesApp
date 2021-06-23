import React from "react";
import MovieListHeader from "../components/headerMovieList";
import { MemoryRouter } from "react-router";

export default {
    title: "Home Page/Header",
    component: MovieListHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
      ],
};

export const Basic = () => <MovieListHeader title={'Discover Movies'} />;

Basic.storyName = "Default";