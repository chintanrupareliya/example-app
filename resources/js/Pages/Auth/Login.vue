<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import { useTheme } from "vuetify";
import { Head, Link } from "@inertiajs/vue3";

const props = defineProps({
    canResetPassword: Boolean,
    status: String,
});

const emailRules = [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
    (v) => !!v || "Password is required",
    (v) => v.length >= 6 || "Password must be at least 6 characters",
];

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <VContainer
        class="d-flex justify-center align-center"
        style="height: 100vh"
    >
        <VCard class="elevation-4 login-card elevation-0 border">
            <Head title="Log in" />

            <VCardTitle class="text-center">Log in</VCardTitle>

            <VCardText>
                <div v-if="status" class="status-message">
                    {{ status }}
                </div>

                <VForm @submit.prevent="submit">
                    <VTextField
                        v-model="form.email"
                        label="Email"
                        type="email"
                        required
                        autofocus
                        autocomplete="username"
                        variant="outlined"
                        :rules="emailRules"
                        :error-messages="form.errors.email"
                    />

                    <VTextField
                        v-model="form.password"
                        label="Password"
                        type="password"
                        required
                        variant="outlined"
                        autocomplete="current-password"
                        :rules="passwordRules"
                        :error-messages="form.errors.password"
                    />

                    <VCheckbox v-model="form.remember" label="Remember me" />

                    <div class="d-flex justify-space-between align-center mt-4">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="forgot-password"
                        >
                            Forgot your password?
                        </Link>

                        <VBtn
                            type="submit"
                            :loading="form.processing"
                            color="primary"
                            class="text-capitalize"
                        >
                            Log in
                        </VBtn>
                    </div>
                </VForm>
            </VCardText>
        </VCard>
    </VContainer>
</template>

<style lang="scss" scoped>
.login-card {
    width: 400px;
    padding: 20px;
    border-radius: 10px;
}

.status-message {
    color: #4caf50;
    font-size: 14px;
    margin-bottom: 10px;
}

.forgot-password {
    text-decoration: none;
    color: #1e88e5;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
}
</style>
