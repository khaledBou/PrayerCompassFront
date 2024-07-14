<template>
    <div class="container">
        <h2>Qibla Direction</h2>
        <form @submit.prevent="getDirection">
            <div class="mb-3">
                <label for="latitude" class="form-label">Latitude</label>
                <input type="number" v-model="latitude" class="form-control" id="latitude" required>
            </div>
            <div class="mb-3">
                <label for="longitude" class="form-label">Longitude</label>
                <input type="number" v-model="longitude" class="form-control" id="longitude" required>
            </div>
            <button type="submit" class="btn btn-primary">Get Direction</button>
        </form>
        <div v-if="direction !== null" class="mt-3">
            <h3>Direction: {{ direction }}°</h3>
        </div>
    </div>
</template>

<script>
import qiblaDirectionService from '@/services/qiblaDirectionService';

export default {
    data() {
        return {
            latitude: null,
            longitude: null,
            direction: null
        };
    },
    methods: {
        async getDirection() {
            try {
                const response = await qiblaDirectionService.getQiblaDirection(this.latitude, this.longitude);
                this.direction = response.data.direction;
            } catch (error) {
                console.error('Failed to get Qibla direction:', error);
            }
        }
    }
};
</script>