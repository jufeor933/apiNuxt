<template>
  <client-only>
    <b-container class="mt-3">
      <b-form-group>
        <b-input
          placeholder="Type a new task"
          @keydown.enter="addTask($event.target)"
        />
      </b-form-group>

      <b-form-group v-if="!!tasks.length">
        <b-list-group>
          <b-list-group-item
            class="list-item d-flex justify-content-between"
            button
            v-for="(task, index) of tasks"
            :key="task.id"
            :class="{ completed: task.completed }"
            @dblclick="changeTaskState(index)"
          >
            <span>{{ task.text }}</span>

            <div>
              <button
                v-show="!task.completed"
                class="svg-button"
                @click.stop="openEditModal(index, task.text)"
              >
                <img src="~/assets/images/edit.svg" />
              </button>
              <button class="svg-button" @click="deleteTask(index)">
                <img src="~/assets/images/delete.svg" />
              </button>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-form-group>

      <h2 v-else>No tasks</h2>

      <b-modal ref="editTaskModal" hide-footer>
        <template v-slot:modal-title>
          Edit task
        </template>
        <div class="d-block text-center">
          <b-form-input
            v-model="currentTask.text"
            ref="inputEdit"
            @keydown.enter="editTask"
          />
        </div>
      </b-modal>
    </b-container>
  </client-only>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  middleware: 'auth',
  data: () => ({
    currentTask: {
      text: '',
      index: null,
    },
  }),
  computed: {
    ...mapGetters('tasks', { tasks: 'data' }),
  },
  methods: {
    ...mapMutations('tasks', [
      'ADD_TASK',
      'EDIT_TASK',
      'DELETE_TASK',
      'TOGGLE',
    ]),

    /** toggle bootstrap modal */
    toggleModal() {
      this.$refs['editTaskModal'].toggle();
    },

    /* open edit modal */
    openEditModal(index, text) {
      this.currentTask = { index, text };
      this.toggleModal();

      // set input focus
      const timeout = setTimeout(() => {
        this.$refs.inputEdit.focus();
        clearTimeout(timeout);
      }, 300);
    },

    /* create a new task */
    addTask(target) {
      const { value } = target;
      if (!value || value.length < 4) {
        return;
      }
      // add in store
      this.ADD_TASK(target.value);
      // clear input
      target.value = '';
    },

    /* edit task */
    editTask(index, text) {
      // edit in store
      this.EDIT_TASK(this.currentTask);

      this.currentTask = {
        text: '',
        index: null,
      };
      this.toggleModal();
    },

    /* delete task */
    deleteTask(index) {
      // delete in store
      this.DELETE_TASK(index);
    },

    /* change task state */
    changeTaskState(index) {
      this.TOGGLE(index);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.list-item.completed {
  background-color: rgb(217, 250, 205);
}

.list-item.completed span {
  text-decoration: line-through;
}

.svg-button {
  border-radius: 50px;
  padding: 0.2rem 0.4rem;
  border: none;
  background-color: transparent;
}

.svg-button img {
  width: 16px;
}
</style>
