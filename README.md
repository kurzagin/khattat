# Khattat (خطاط)

Khattat is a free and open-source geometric drafting tool for creating Square Kufic (الخط الكوفي المربع) calligraphy. It provides a precise infinite-grid canvas for drawing, transforming, saving, and exporting typographic designs.

## Features

- Infinite, zoomable grid workspace with snap-to-grid drawing
- Draw, erase, pan, marquee-select, recolor, rotate, flip, and scale tools
- Reusable Kufic preset library with positional categories
- SVG and high-resolution PNG export
- Portable `.khatt` project files
- Undo and redo history
- Web and Tauri desktop applications

## Repository structure

- `apps/desktop` — Next.js editor packaged with Tauri
- `apps/web` — web application
- `apps/marketing` — project website and release notes
- `packages/ui` — shared Khattat editor UI
- `packages/core` — shared core package

The former public/private split has been consolidated into this single repository. The complete application source is available here; there is no paid edition or feature-gated source tree.

## Development

Khattat uses [Bun](https://bun.sh/) and Turborepo.

```bash
bun install
bun run dev
```

Other useful commands:

```bash
bun run build
bun run lint
```

To work on an individual app, run its scripts through Bun from that app's directory. Building the native desktop shell also requires the Tauri prerequisites for your platform.

## Contributing

Bug reports, feature requests, documentation improvements, and code contributions are welcome. Please open an issue before beginning a large change so the approach can be discussed.

## License

Khattat is released under the [MIT License](LICENSE).

## Contact

- Website: [khattat.krzgn.xyz](https://khattat.krzgn.xyz)
- Email: [khattat@krzgn.xyz](mailto:khattat@krzgn.xyz)
- X: [@kurzagin](https://twitter.com/kurzagin)
- GitHub: [@kurzagin](https://github.com/kurzagin)
