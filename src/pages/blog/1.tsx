import { Container, Stack, Typography } from "@mui/material";

import Head from "next/head";

function post1() {
    return (
        <>
            <Head>
                <title>O aplikacji</title>
                <meta name="description" content="Opis aplikacji" />
                <link rel="canonical" href="/blog/1" />
            </Head>
            <Container component="main">
                <Stack my={{ xs: 3, md: 5 }}>
                    <Typography variant="h3" gutterBottom textAlign={"center"}>
                        Witaj w Aplikacji do Morsowania!
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={{ xs: 2, md: 3 }}>
                        Rejestracja i Logowanie
                    </Typography>
                    <Typography paragraph>
                        Aby rozpocząć korzystanie z aplikacji, zarejestruj się poprzez podanie
                        swojego adresu e-mail, nazwy użytkownika i hasła. Po rejestracji możesz
                        także logować się do swojego konta.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Profil Użytkownika
                    </Typography>
                    <Typography paragraph>
                        Personalizuj swój profil, dodając zdjęcie profilowe, opis oraz informacje o
                        swoich osiągnięciach w morsowaniu.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Zapisywanie Morsów i Zimnych Pryszniców
                    </Typography>
                    <Typography paragraph>
                        Aplikacja pozwala na rejestrowanie swoich morsów i zimnych pryszniców.
                        Możesz wprowadzać datę, czas, lokalizację oraz dodatkowe notatki. Oceniaj
                        swoje doświadczenia.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Tworzenie Grup
                    </Typography>
                    <Typography paragraph>
                        Stwórz grupy tematyczne, na przykład na podstawie lokalizacji lub
                        preferowanych miejsc do morsowania. Grupy pomagają w organizacji wspólnych
                        wyjść do wody.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Dołączanie do Grup
                    </Typography>
                    <Typography paragraph>
                        Przeglądaj dostępne grupy i dołącz do tych, które cię zainteresują. To
                        ułatwia nawiązywanie kontaktów z osobami o podobnych zainteresowaniach.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Umawianie się na Wspólne Morsy
                    </Typography>
                    <Typography paragraph>
                        Aplikacja oferuje funkcję umawiania się na wspólne morsy z innymi
                        użytkownikami lub w ramach grup. Ustalaj daty, godziny i miejsca spotkań
                        oraz komunikuj się w ramach aplikacji.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Zdobywanie Rang
                    </Typography>
                    <Typography paragraph>
                        Zdobywaj rangi w oparciu o swoją aktywność i osiągnięcia. Rangi motywują do
                        udziału w społeczności i aktywności w aplikacji.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Powiadomienia i Aktualności
                    </Typography>
                    <Typography paragraph>
                        Otrzymuj powiadomienia o wydarzeniach, aktualnościach w grupach i swoich
                        osiągnięciach, aby być na bieżąco.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Bezpieczeństwo
                    </Typography>
                    <Typography paragraph>
                        Aplikacja dba o bezpieczeństwo użytkowników, umożliwiając blokowanie lub
                        zgłaszanie nieodpowiednich treści lub użytkowników.
                    </Typography>

                    <Typography variant="h4" gutterBottom mt={1}>
                        Statystyki i Historia Morsów
                    </Typography>
                    <Typography paragraph>
                        Śledź swoje postępy, oglądając statystyki morsów, zimnych pryszniców i
                        innych aktywności na swoim profilu. Przeglądaj swoją historię morsów.
                    </Typography>
                </Stack>
            </Container>
        </>
    );
}

export default post1;
