export const Header = () => {
    return (
        <>
            <header class="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-border-color dark:border-white/10 px-4 py-3">
                <div class="flex items-center justify-between">
                    <button class="flex size-10 items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 class="text-lg font-bold leading-tight tracking-tight text-center flex-1">Tourist Registration</h1>
                    <button class="flex size-10 items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
                        <span class="material-symbols-outlined">help</span>
                    </button>
                </div>
                <!-- Progress Stepper -->
                <div class="mt-4 mb-2">
                    <div class="relative flex items-center justify-between px-2">
                        <!-- Progress Line Background -->
                        <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border-color dark:bg-white/20 z-0"></div>
                        <!-- Active Progress Line -->
                        <div class="absolute left-0 top-1/2 h-0.5 w-[38%] -translate-y-1/2 bg-primary z-0"></div>
                        <!-- Steps -->
                        <div class="relative z-10 flex flex-col items-center gap-1 group">
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                <span class="material-symbols-outlined text-sm">person</span>
                            </div>
                            <span class="text-[10px] font-semibold text-primary">Personal</span>
                        </div>
                        <div class="relative z-10 flex flex-col items-center gap-1 group">
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-surface-dark">
                                <span class="material-symbols-outlined text-sm">id_card</span>
                            </div>
                            <span class="text-[10px] font-semibold text-primary">ID Proof</span>
                        </div>
                        <div class="relative z-10 flex flex-col items-center gap-1 group">
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border-2 border-border-color dark:border-white/20 text-text-secondary dark:text-gray-400">
                                <span class="material-symbols-outlined text-sm">emergency_home</span>
                            </div>
                            <span class="text-[10px] font-medium text-text-secondary dark:text-gray-400">Contact</span>
                        </div>
                        <div class="relative z-10 flex flex-col items-center gap-1 group">
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border-2 border-border-color dark:border-white/20 text-text-secondary dark:text-gray-400">
                                <span class="material-symbols-outlined text-sm">fact_check</span>
                            </div>
                            <span class="text-[10px] font-medium text-text-secondary dark:text-gray-400">Review</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
