import { Box, Checkbox, Container, List, ListItem, Stack, Typography } from "@mui/material";
import Head from "next/head";

function post2() {
    return (
        <>
            <Head>
                <title>Poradnik</title>
                <meta name="description" content="Poradnik morsa" />
                <link rel="canonical" href="/blog/2" />
            </Head>
            <Container component="main">
                <Stack my={{ xs: 3, md: 5 }}>
                    <Typography variant="h3" component="h1" textAlign="center">
                        Jak zacząć morsowanie.
                        <br /> Poradnik dla początkujących
                    </Typography>

                    <Typography variant="h5" mt={{ xs: 3, md: 5 }}>ZASADY BEZPIECZNEGO ZIMOWEGO PŁYWANIA</Typography>
                    <List>
                        <ListItem>
                            <Checkbox checked /> Uprzednia adaptacja do niższych temperatur (np. za
                            pomocą zimnych pryszniców).
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Spokojna rozgrzewka trwająca od 10 do 15 minut. Ma
                            nas rozgrzać, ale nie spocić.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Rozbieramy się zaczynając od dołu do góry, ubieramy
                            odwrotnie po wytarciu całego ciała.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Na wejście do wody możemy zabrać obuwie (od butów
                            neoprenowych po zwykłe klapki) - kwestia odłamków szkła/poślizgnięcia
                            się na lodzie.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Czas kąpieli uzależniony jest od naszego stażu,
                            warunków pogodowych i aktualnego samopoczucia, nie przesadzamy. To samo
                            odnosi się do częstotliwości morsowania.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Przed samą kąpielą, tak jak przed każdym
                            treningiem, trzeba być wypoczętym, odżywionym i nawodnionym oraz nie
                            wolno korzystać z jakichkolwiek używek takich, jak papierosy czy
                            alkohol. Napój z procentami dodatkowo wychładza organizm, obniża
                            ciśnienie krwi oraz może powodować skurcze uniemożliwiające ruch w
                            wodzie.
                        </ListItem>
                    </List>

                    <Typography variant="h5">
                        DLA KOGO NIE JEST WSKAZANA ZIMNA TERMOGENEZA
                    </Typography>
                    <List>
                        <ListItem>
                            <Checkbox checked /> Dla osób z bardzo słabą odpornością.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Dla osób z infekcją dróg moczowych.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Dla osób, które mają chore nerki.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Dla osób z wyczerpanymi nadnerczami i zaburzoną
                            osią podwzgórze-przysadka-nadnercza.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Dla osób z dużą niedoczynnością tarczycy.
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Dla osób z niewydolnością krążeniową.
                        </ListItem>
                    </List>

                    <Typography variant="h5">CO TRZEBA ZABRAĆ</Typography>
                    <List>
                        <ListItem>
                            <Checkbox checked /> Ręcznik
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Bieliznę na zmianę
                        </ListItem>
                    </List>

                    <Typography variant="h5">CO MOŻNA ZABRAĆ</Typography>
                    <List>
                        <ListItem>
                            <Checkbox checked /> Rękawiczki (mogą być neoprenowe)
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Obuwie do wody i (może być neoprenowe)
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Czapkę
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Karimatę pod nogi
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Szalik/komin/kominiarkę
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Termos z gorącą kawą/herbatą
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Pas rozgrzewający na nerki
                        </ListItem>
                        <ListItem>
                            <Checkbox checked /> Szlafrok
                        </ListItem>
                    </List>
                </Stack>
            </Container>
        </>
    );
}

export default post2;
