## Coordination
Several agents may work here in parallel. Before writing, follow
gantemur/playbook coordination.md (current main): claim a lock in
LOCKS.md, re-check it before every push, release it when done, and
keep unfinished work in a workspace. Locks grant no authority; the
rest of this file says what may be committed or merged.
