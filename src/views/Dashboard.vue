<template>
  <!--begin::Row-->
  <div class="card">
    <Datatable
      @on-sort="sort"
      :data="complaints"
      :header="tableHeader"
      :enable-items-per-page-dropdown="true"
    >
      <template v-slot:title="{ row: complaint }">
        {{ complaint.title }}
      </template>

      <template v-slot:category="{ row: complaint }">
        {{ complaint.category }}
      </template>

      <template v-slot:createdDate="{ row: complaint }">
        {{ complaint.createdDate }}
      </template>

      <template v-slot:status="{ row: complaint }">
        {{ complaint.status }}
      </template>
    </Datatable>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import { getAssetPath } from "@/core/helpers/assets";
import arraySort from "array-sort";
import { useComplaintsStore } from "@/stores/getComplaints";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  name: "main-dashboard",
  components: { Datatable },
  setup() {
    const { t } = useI18n();

    const tableHeader = reactive([
      {
        columnName: t("title"),
        columnLabel: "title",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: t("category"),
        columnLabel: "category",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: t("createdDate"),
        columnLabel: "createdDate",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: t("status"),
        columnLabel: "status",
        sortEnabled: true,
        columnWidth: 250,
      },
    ]);

    const store = useComplaintsStore();
    const { complaints } = storeToRefs(store);

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(complaints.value, sort.label, { reverse });
      }
    };

    onMounted(() => {
      const complaintsStore = useComplaintsStore();

      complaintsStore.fetchComplaints();
    });

    return {
      getAssetPath,
      tableHeader,
      complaints,
      sort,
    };
  },
});
</script>

<style lang="scss" scoped></style>
